import { AxiosResponse } from 'axios';
import httpClient from '../http'
import {Patient} from '../models/patients'

const ressoucesUrl:string = "/api/patient/"

export const usePatienteServie = () => {
    const savePatient =  async (patient: Patient): Promise<Patient>  => {
     const response:AxiosResponse<Patient> = await httpClient.post<Patient>(ressoucesUrl,patient)
     return response.data
    }

    return savePatient

}