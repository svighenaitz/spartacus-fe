import proxy from '../../config/proxy'

export const getCurrentAPIUrl = () => {
    return proxy[API_ENV]['/api/']['target']
}