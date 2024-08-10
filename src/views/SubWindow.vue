<template>
    <div class="text-center">
        <h1>{{ appName }}</h1>
        <img src="../assets/404.png" :width="300">
        <tr>
            <th v-for="map in getRirekiMap" v-bind:name="map.id">
                {{ map.text }}
            </th>
        </tr>
        <tr v-for="data in getRirekiData">
            <td v-for="map in getRirekiMap" v-bind:name="map.id">
                {{ data[map.id] }}
            </td>
        </tr>
    </div>
</template>
<script>
export default {
    name: 'Rireki',
    components: {
    },
    methods: {
        getRirekiMap(){
            return this.rirekiMap;
        },
        getRirekiData(){
            return this.rirekiData;
        }
    },
    data: () => ({
        appName: "履歴",
        rirekiMap: [
            {id:"id", text:"番号"},
            {id:"type", text:"タイプ"},
            {id:"date", text:"日付"}
        ],
        rirekiData: [
            {id:"5", type:"つかう", date: "2020/1/4"},
            {id:"4", type:"ためる", date: "2020/1/4"},
            {id:"3", type:"ためる", date: "2020/1/3"},
            {id:"2", type:"ためる", date: "2020/1/2"},
            {id:"1", type:"ためる", date: "2020/1/1"}
        ]
    }),
}
</script>
<style>

</style>