<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data(){
    return {
      events: null
    }
  },
  async created(){
    try {
      // const res = await axios.get('https://my-json-server.typicode.com/daystone4/Real-World-Vue/events')
      const res = await EventService.getEvents()
      this.events = res.data
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
