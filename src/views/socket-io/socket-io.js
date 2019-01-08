import io from 'socket.io-client'

export default {
  init() {
    const socket = io.connect('http://localhost:8008')
  }
}
