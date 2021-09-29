<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div id="particles-js" :class="$q.dark.isActive ? 'dark_gradient' : 'normal_gradient'"></div>
        <q-card
          class="login-form"
          v-bind:style="
            $q.platform.is.mobile ? { width: '80%' } : { width: '30%' }
          "
        >
          <q-img src="https://nikolanews.com/wp-content/uploads/2021/04/image-15.jpg" :ratio="16/5"></q-img>
          <q-card-section>
            <q-avatar
              size="74px"
              class="absolute"
              style="top: 0;right: 25px;transform: translateY(-50%);"
            >
              <img
                src="https://media.glassdoor.com/sqll/1145722/tigergraph-squarelogo-1544825603428.png"
              />
            </q-avatar>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Log in to Dashboard</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled v-model="username" id="username" label="Username" lazy-rules />

              <q-input :type="isPwd ? 'password' : 'text'" filled v-model="password" id="password" label="Password" lazy-rules>
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
              </q-input>

              <div>
                <q-btn
                  label="Login"
                  type="button"
                  color="primary"
                  @click="loginNotify"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script type="text/javascript"></script>
<script>
import { LocalStorage } from 'quasar'
import { api } from '../boot/axios'
import { ref } from 'vue'
export default {
  setup(){
    return{
      isPwd: ref(true),
    }
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    loginNotify() {
      // Login cookie and access token
      // login done 
      // access token : Done
       var body = new FormData();
      body.append("username", this.username);
      body.append("password", this.password);

      api.post('/login/', body)
        .then((response) => {
          // console.log(response.data)
          if (response.data["error"] == true)
          {
            this.$q.notify({
              message: response.data["message"],
            });
          }
          if (response.data["error"] == false)
          {
            LocalStorage.set("login", this.username)
            console.log(response.data["name"])
            LocalStorage.set("name", response.data["name"])
            LocalStorage.set("access_token", response.data["access_token"])
            this.$q.notify({
              message: "Login Successful",
            });
            this.$router.push("dashboard");
          }
        })
        .catch((e) => {
          // console.log(e);
          
          // TODO log class to catch error
        })
    
    },
  },
  mounted() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  },
};
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.normal_gradient {
  background: linear-gradient(10deg, rgba(1, 9, 26, 0.144) 15%, #f0a709 70%);
}
.dark_gradient {
  background: linear-gradient(145deg, rgb(11, 26, 61) 15%, #4c1014 70%);
}
.login-form {
  position: absolute;
}
</style>
