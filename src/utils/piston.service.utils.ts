const createExecuteCodeMethodBody = ({
    language,
    version,
    content,
}: {
    language: string
    version: string
    content: string
}) => ({
    language: language,
    version: version,
    files: [
        {
            content: content,
        },
    ],
})

export { createExecuteCodeMethodBody }
