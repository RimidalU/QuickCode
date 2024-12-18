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
    } catch (error) {
        console.error('Error fetching languages:', error)
    }
}

const sendPost = async <T>(url: string, values?: T | undefined) => {
    const response = await fetch(url, {
        ...HEADERS,
        method: 'POST',
        body: values && JSON.stringify(values),
    })

    return handleErrors(response)
}

const sendGet = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, {
        ...HEADERS,
        method: 'GET',
    })

    return handleErrors(response)
}

export { sendPost, sendGet }
