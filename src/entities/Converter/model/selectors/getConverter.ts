import { StateSchema } from 'app/providers/StoreProvider'
import { ConverterSchema } from '../types/converter'

export const getConverter = (state: StateSchema):ConverterSchema => state.converter
