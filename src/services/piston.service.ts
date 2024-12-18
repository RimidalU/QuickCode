import { createExecuteCodeMethodBody } from '@/utils/piston.service.utils'
import { LanguageInfo } from '@/models/common.model'

import { sendGet, sendPost } from '../utils/network.utils'

const PISTON_BASE_URL = 'https://emkc.org/api/v2/'

enum pistonApiPaths {
    PISTON_EXECUTE = 'piston/execute',
    PISTON_RUNTIMES = 'piston/runtimes',
}

const executeCode = async (language: string, content: string) => {
    const url = `${PISTON_BASE_URL}${pistonApiPaths.PISTON_EXECUTE}`
    const values = createExecuteCodeMethodBody({
        language,
        version: '18.15.0',
        content,
    })

    return await sendPost(url, values)
}

const fetchAvailableLanguages = async (): Promise<LanguageInfo[]> => {
    const url = `${PISTON_BASE_URL}${pistonApiPaths.PISTON_RUNTIMES}`

    return await sendGet(url)
}

export { executeCode, fetchAvailableLanguages }
