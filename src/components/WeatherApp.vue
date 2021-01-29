<template>
    <main>
        <Measurements
            :cloudiness="this.forecast.cloudiness"
            :windSpeed="this.forecast.windSpeed"
            :humidity="this.forecast.humidity"
        ></Measurements>

        <Temperature
            :value="this.forecast.temperatureValue"
            :high="this.forecast.temperatureHigh"
            :low="this.forecast.temperatureLow"
        ></Temperature>

        <Weather
            :location="this.forecast.location"
            :description="this.forecast.description"
            :icon="this.forecast.weatherIcon"
        ></Weather>
    </main>
</template>

<script>
import Weather from './Weather'
import Temperature from './Temperature'
import Measurements from './Measurements'
import WeatherForecast from '../services/WeatherForecast'

export default {
    name: 'WeatherApp',

    components: {
        Weather,
        Temperature,
        Measurements
    },

    data() {
        return {
            forecast: new WeatherForecast
        }
    }
}
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    box-shadow: 0 19px 38px #212121, 0 15px 12px rgba(0,0,0,0.22);
}

.app--day {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1),#212121), url('../assets/images/background.jpg');
}

.app--night {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), #212121);
}

@media screen and (min-width: 450px) {
    main {
        width: 330px;
        height: 600px;
        border-radius: 5px;
    }
}
</style>
