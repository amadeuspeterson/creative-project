<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  components: {
    SidebarMenu
  },
  props: {
      // Sidebar menu (required)
      menu: {
        type: Array,
        required: true
      },

      // Sidebar Collapse state
      collapsed: {
        type: Boolean,
        default: false
      },

      // Sidebar width (expanded)
      width: {
        type: String,
        default: '350px'
      },

      // Sidebar width (collapsed)
      widthCollapsed: {
        type: String,
        default: '50px'
      },

      // Keep only one child opened at a time (first level only)
      showOneChild: {
        type: Boolean,
        default: false
      },

      // Keep all child open
      showChild: {
        type: Boolean,
        default: false
      },

      // Sidebar right to left
      rtl: {
        type: Boolean,
        default: false
      },

      // Make sidebar relative to the parent (by default the sidebar is relative to the viewport)
      relative: {
        type: Boolean,
        default: false
      },

      // Hide toggle collapse btn
      hideToggle: {
        type: Boolean,
        default: false
      },

      // Sidebar theme (available themes: 'white-theme')
      theme: {
        type: String,
        default: ''
      },

      // Disable hover on collapse mode
      disableHover: {
        type: Boolean,
        default: false
      }
  },
  return {
                  menu: [
                      {
                          header: true,
                          title: 'Main Navigation',
                          hiddenOnCollapse: true
                      },
                      {
                          href: '/',
                          title: 'Dashboard',
                          icon: 'fa fa-user'
                      },
                      {
                          href: '/charts',
                          title: 'Charts',
                          icon: 'fa fa-chart-area',
                          child: [
                              {
                                  href: '/charts/sublink',
                                  title: 'Sub Link'
                              }
                          ]
                      }
                  ]
              }
}
</script>
<style>
* { margin: 0 !important; }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
  width: 10%;
  background-color: gray;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

#nav a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
