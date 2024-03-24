<template>
    <v-app-bar height="150px" class="tw-flex tw-justify-between">
        <div>
            <v-btn> Accueil </v-btn>
            <v-btn> Projet </v-btn>
            <v-btn> A propos </v-btn>
            <v-btn> Blog </v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-img height="100px" src="@/assets/img/logo.svg"></v-img>
        <v-spacer></v-spacer>
        <v-text-field rounded label="Recherche" variant="outlined"></v-text-field>
        <v-btn color="primary"> Connexion </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>
