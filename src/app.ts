import { PLATFORM } from 'aurelia-pal'

export class App {
  	configureRouter(config, router) {
		config.title = 'Contact'
		config.map([
			{ 
				route: '',
				moduleId: PLATFORM.moduleName('no-selection'),
				title: 'Select'
			},
			{ 
				route: 'contacts/:id',
				moduleId: PLATFORM.moduleName('contact-detail'),
				name: 'contacts'
			}
		])
  	}

}
