import { toast } from 'sonner'

import { TOASTER_MESSAGES } from '@/models/toaster.model'

const HEADERS = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

const handleErrors = async (response: Response) => {
    try {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()

        return data
    } catch {
        toast.error(TOASTER_MESSAGES.fetchingError)
    }
}

const sendPost = async <T>(url: string, values?: T | undefined) => {
    try {
        const response = await fetch(url, {
            ...HEADERS,
            method: 'POST',
            body: values && JSON.stringify(values),
        })

        return handleErrors(response)
    } catch {
        toast.error(TOASTER_MESSAGES.fetchingError)
    }
}

const sendGet = async <T>(url: string): Promise<T | undefined> => {
    try {
        const response = await fetch(url, {
            ...HEADERS,
            method: 'GET',
        })

        return handleErrors(response)
    } catch {
        toast.error(TOASTER_MESSAGES.fetchingError)
    }
}

export { sendPost, sendGet }
