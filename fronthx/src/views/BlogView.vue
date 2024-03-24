<template>
    <div class="tw-my-24">
        <div class="tw-bg-blue-700 tw-py-10 tw-pl-10 text-left text-white tw-flex">
            <div class="tw-flex tw-flex-col tw-justify-center tw-my-auto tw-px-2">
                <div class="text-h3 font-weight-bold tw-my-4">Raise4Africa Blog</div>
                <div class="tw-mb-10">Découvrez tout au sujet de la communauté <span class="font-weight-bold">Raise4Africa</span></div>
                <div class="tw-flex">
                    <v-text-field class="tw-w-96 tw-mr-4" rounded="lg" bg-color="white" variant="outlined"></v-text-field>
                    <v-btn rounded="lg" size="x-large" color="warning">S'abonner</v-btn>
                </div>
            </div>
            <v-img height="400" src="@/assets/img/livreur.svg"></v-img>
        </div>
        <div class=" tw-bg-gradient-to-tr tw-from-blue-100 tw-to-yellow-100">
            <div class="text-h3 tw-text-center">Derniers articles</div>
            <div class="tw-w-1/2 tw-mx-auto tw-mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maxime iste unde vero voluptatibus voluptatem aspernatur,
                officiis veritatis porro rerum eligendi, accusantium fugit at odio recusandae sit laboriosam nostrum cumque.
            </div>
            <div class="tw-flex">
                <div class="tw-grid tw-grid-cols-2 tw-w-2/3 my-10">
                    <v-card v-for="index in 4" :key="index" width="400px" class="mx-4 my-4" elevation="5" rounded="lg">
                        <v-img height="300px" cover src="@/assets/img/africa.svg"></v-img>
                        <v-card-text>
                            <div class="tw-flex tw-justify-between tw-text-sm">
                                <div>
                                    <v-icon color="primary">mdi-calendar</v-icon>
                                    15 septempbre 2023
                                </div>
                                <div>
                                    <v-icon color="primary">mdi-account</v-icon>
                                    KOFFI DIABLO
                                </div>
                                <div>
                                    <v-icon color="primary">mdi-message-processing-outline</v-icon>
                                    4 Commentaires
                                </div>
                            </div>
                            <div class="text-left tw-my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo saepe ipsam labore. Distinctio eveniet
                                necessitatibus nesciunt repellat inventore quos nobis voluptate ullam autem, omnis minima rerum.
                                Exercitationem, totam aliquam?
                            </div>
                            <div class="tw-mx-auto tw-py-6 tw-px-8 tw-text-white tw-font-bold tw-bg-blue-800 tw-w-max tw-rounded-xl">Lire plus...</div>
                        </v-card-text>
                    </v-card>
                </div>
                <div class="my-10 tw-py-6 tw-w-[32%]">
                    <div class="tw-rounded-lg text-left tw-bg-blue-400 tw-w-full tw-px-2 tw-py-4">
                        <v-text-field
                            append-inner-icon="mdi-magnify"
                            rounded="lg"
                            label="Rechercher un article"
                            variant="outlined"
                            bg-color="white"
                        ></v-text-field>
                        <div class="text-h3">
                            Tags
                        </div>
                        <div class="tw-grid tw-grid-cols-2">
                            <div class="tw-mx-4" v-for="i in 10" :key="i">
                                value
                            </div>
                        </div>
                    </div>
                    <div class="tw-bg-yellow-200 tw-rounded-lg tw-p-4 my-6">
                        <div class="font-weight-bold text-h4 my-4">
                            Article récents
                        </div>
                        <v-card v-for="i in 3" :key="i" rounded="lg" class="tw-flex tw-justify-between tw-p-4 my-6">
                            <v-img src="@/assets/img/logo.svg" width="100" height="100">
                            </v-img>
                            <div class="text-left tw-ml-2">
                                <div class="font-weight-bold mb-4">
                                    Une plateforme continentale pour le changement
                                </div>
                                <div class="tw-text-sm">
                                    Septembre 2023, <br>
                                    Georges AYENI
                                </div>
                            </div>
                        </v-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img{
    background: url('@/assets/img/gradient.svg') no-repeat;
}
</style>