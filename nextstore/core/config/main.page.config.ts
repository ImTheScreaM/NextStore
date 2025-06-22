class MainPage {
	HOME = '/'
	BUSKET = '/busket'
	USER_PAGE = '/user'
	LOGIN = '/login'
	REGISTER = '/register'
	

	GET_ID(id:string) {
		return (`${id}`)
	}
}


export const MAIN = new MainPage()