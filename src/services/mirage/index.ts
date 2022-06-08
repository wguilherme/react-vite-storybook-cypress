import {ActiveModelSerializer, createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker'

type User = {
	name: string;
	email: string;
	created_at: string;
}
export const makeServer = () => {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({} as User),
		},
		factories: {
			user: Factory.extend({
				name() {
					return faker.internet.userName();
				},
				email() {
					return faker.internet.email().toLowerCase();
				},
				createdAt() {
					return faker.date.recent();
				},
			})
		},
		seeds(server) {
			server.createList('user', 200);
		},

		routes() {
			this.namespace = 'api';
			this.timing = 750; 
			this.post('/users');
      this.get('/users')
		}
	})

	return server;
}