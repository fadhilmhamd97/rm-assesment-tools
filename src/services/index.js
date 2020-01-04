const rootPath = 'http://202.157.177.193:7010'

const hostRoute = [
    //auth
    {route: '/auth/login', name:'auth.login'},

    //indicator
    {route: '/indicator', name:'indicator.list'},
    {route: '/indicator/:id', name:'indicator.get'},
]

export const route = (routeAliases, id) => {
    hostRoute.map( 
        value => {
            if(routeAliases === value.name){
                return value.route.includes(':id') ? rootPath.concat(value.route.replace(':id', id)) : rootPath.concat(value.route);
            }
        }
    )
}