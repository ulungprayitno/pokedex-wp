import { useCallback, useReducer, useState } from 'react'
import produce from 'immer'
import isEqual from 'react-fast-compare'
import api from '../utils/api'

const actionsType = {
  SET_FETCHING: 'SET_FETCHING',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_ERROR: 'SET_ERROR',
  SET_SUCCESS_DETAIL: 'SET_SUCCESS_DETAIL',
  SET_SUCCESS_TYPE: 'SET_SUCCESS_TYPE',
}

const initialState = {
  data: null,
  loading: false,
  error: null,
  details: null,
  compare: null,
  types: null,
  offset: 0
}

const reducer = produce((draft, actions) => {
  const { type, payload = {} } = actions
  switch (type) {
    case actionsType.SET_FETCHING:
      draft.loading = true
      draft.error = null
      return
    case actionsType.SET_SUCCESS:
      if (!isEqual(draft.data, payload.data)) {
        draft.data = draft.data ? draft.data.concat(payload.data) : payload.data 
        draft.offset = draft.offset + 20
        draft.loading = false
      }
      return
    case actionsType.SET_SUCCESS_DETAIL:
      if(!isEqual(draft.details, payload.data) || isEqual(draft.compare, payload.data)) {
        if(payload.compare) draft.compare = payload.data
        else draft.details = payload.data
        draft.loading = false
      }
      return
    case actionsType.SET_SUCCESS_TYPE:
      if (!isEqual(draft.types, payload.data)) {
        draft.types = payload.data
        draft.loading = false
      }
      return
    case actionsType.SET_ERROR:
      draft.error = payload.error
      draft.loading = false
      return
    default:
      throw new Error('Unknown action type')
  }
})

export const useLazyFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data, loading, error, details, compare, types, offset } = state
  
  const fetchData = useCallback( async ({compare}) => {
    dispatch({
      type: actionsType.SET_FETCHING,
    });

    const res = await api.get('/pokemon', {
      params: {
        limit: compare ? 10220 : 20,
        offset
      } 
    });
    if(res){
      let response = res.data.results;
      if (!compare) {
        response = await Promise.all(
          res.data.results.map(async item => {
            const p = await api.get(`/pokemon/${item.name}`)
            const pokemon = p.data
            if(pokemon){
              return {
                id: pokemon.id,
                name: pokemon.name,
                types: pokemon.types,
                sprites: pokemon.sprites
              }            
            }
          })
        ) 
      }

      dispatch({
        type: actionsType.SET_SUCCESS,
        payload: {
          data: response,
        },
      })
    } else {
      dispatch({
        type: actionsType.SET_ERROR,
        payload: {
          error: res,
        },
      })
    }
  }, [offset]);

  const fetchDataFilter = useCallback( async (url) => {
    dispatch({
      type: actionsType.SET_FETCHING,
    });
    console.log({kampret : url})
    const res = await api.get(url);
    if(res){
      let response = await Promise.all(
        res.data.pokemon.map(async item => {
          const p = await api.get(`/pokemon/${item.pokemon.name}`)
          const pokemon = p.data
          if(pokemon){
            return {
              id: pokemon.id,
              name: pokemon.name,
              types: pokemon.types,
              sprites: pokemon.sprites
            }            
          }
        })
      )
      dispatch({
        type: actionsType.SET_SUCCESS,
        payload: {
          data: response,
        },
      })
    } else {
      dispatch({
        type: actionsType.SET_ERROR,
        payload: {
          error: res,
        },
      })
    }
  }, []);

  const getDetailByName = useCallback(async (name, compare = false) => {
    dispatch({
      type: actionsType.SET_FETCHING,
    });

    const res = await api.get(`/pokemon/${name}`);
    if(res){
      const response = await {
        name: res.data.forms[0].name,
        types: res.data.types,
        sprites: res.data.sprites,
        stats: res.data.stats,
        abilities: res.data.abilities,
        weight: res.data.weight,
        height: res.data.height
      }
      dispatch({
        type: actionsType.SET_SUCCESS_DETAIL,
        payload: {
          data: response,
          compare,
        },
      });
      return data;
    } else {
      dispatch({
        type: actionsType.SET_ERROR,
        payload: {
          error: res,
        },
      })
    }
  }, []);

  const getTypes = useCallback(async () => {
    dispatch({
      type: actionsType.SET_FETCHING,
    });

    const res = await api.get(`/type`);
    if(res){
      let response = res.data.results;
      dispatch({
        type: actionsType.SET_SUCCESS_TYPE,
        payload: {
          data: response,
        },
      });
    } else {
      dispatch({
        type: actionsType.SET_ERROR,
        payload: {
          error: res,
        },
      })
    }
  }, []);

  return [{ loading, error, data, details, compare, types }, {fetchData, fetchDataFilter, getDetailByName, getTypes}]
}