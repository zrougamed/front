/* ToDo : work on Vue Call in the mutations , no yet implemented */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-return */
const state = {
	data: [
    {
        name: 'Dr. Jada Conolly',
        city: 'GILBERT',
        state: 'AZ',
        last_call: '12-09-2019'
    },
    {
        name: 'Dr. Kiley Ibbotson',
        city: 'LA MESA',
        state: 'CA',
        last_call: '09-02-2019'
    },
    {
        name: 'Dr. Leslie Tecklenburg',
        city: 'SAN DIEGO',
        state: 'CA',
        last_call: '03-25-2019'
    },
    {
        name: 'Dr. Lia Whitledge',
        city: 'PHOENIX',
        state: 'AZ',
        last_call: '03-18-2019'
    },
    {
        name: 'Dr. Sam Wileman',
        city: 'MESA',
        state: 'AZ',
        last_call: '04-09-2019'
    },
    {
        name: 'Dr. Edgar Colmer',
        city: 'PHOENIX',
        state: 'AZ',
        last_call: '09-03-2019'
    },
    {
        name: 'Dr. Kaiden Rozelle',
        city: 'LAKEWOOD',
        state: 'CA',
        last_call: '01-12-2019'
    },
    {
        name: 'Dr. Leslie Stopher',
        city: 'YUMA',
        state: 'AZ',
        last_call: '04-15-2019'
    },
    {
        name: 'Dr. Miguel Subasic',
        city: 'TEMPE',
        state: 'AZ',
        last_call: '11-09-2019'
    },
    {
        name: 'Dr. Reese Vandygriff',
        city: 'LAKEWOOD',
        state: 'CA',
        last_call: '01-01-2019'
    },
    {
        name: 'Dr. Griffin Troglen',
        city: 'YUMA',
        state: 'AZ',
        last_call: '04-12-2019'
    },
    {
        name: 'Dr. Zachary Wehrley',
        city: 'TEMPE',
        state: 'AZ',
        last_call: '10-09-2019'
    },
    {
        name: 'Dr. Kyle Wahlert',
        city: 'LAKEWOOD',
        state: 'CA',
        last_call: '01-02-2019'
    }
]
}


const mutations = {
	// updateTask(state, payload) {
	// 	Object.assign(state.tasks[payload.id], payload.updates)
	// },
	// deleteTask(state, id) {
	// 	Vue.delete(state.tasks, id)
	// },
	// addTask(state, payload) {
	// 	Vue.set(state.tasks, payload.id, payload.task)
	// }
}

const actions = {
	// updateTask({ commit }, payload) {
	// 	commit('updateTask', payload)
	// },
	// deleteTask({ commit }, id) {
	// 	commit('deleteTask', id)
	// },
	// addTask({ commit }, task) {
	// 	let taskId = uid()
	// 	let payload = {
	// 		id: taskId,
	// 		task: task
	// 	}
	// 	commit('addTask', payload)
	// }
}

const getters = {
	discordUsers: (state) => {
		let users = []
    state.data.forEach(function(element) {
    let user = {}
		Object.keys(element).forEach(function(key) {
    //   console.log('here')
			let part = element[key]
				user[key] = part
		})
    users.push(user)
    })
    
		return users
	},
	// tasksCompleted: (state) => {
	// 	let tasks = {}
	// 	Object.keys(state.tasks).forEach(function(key) {
	// 		let task = state.tasks[key]
	// 		if (task.completed) {
	// 			tasks[key] = task
	// 		}
	// 	})
	// 	return tasks
	// }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
