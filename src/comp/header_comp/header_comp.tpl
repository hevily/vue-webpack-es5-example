<div class="header">

    <input v-model="input_text" type="text"/>
    <button v-on:click="getContent">getContent</button>

    <div>
        <div v-for="item in items">
            {{ item}}
        </div>
    </div>

</div>