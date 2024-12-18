const HEADERS = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

const sendPost = async <T>(url: string, values?: T | undefined) => {
    const response = await fetch(url, {
        ...HEADERS,
        method: 'POST',
        body: values && JSON.stringify(values),
    })

    return response
}

export { sendPost }
