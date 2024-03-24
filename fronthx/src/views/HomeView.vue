<template>
    <div class="home">
        <v-carousel hide-delimiters class="tw-mt-24">
            <template v-slot:prev="{}">
                <div class="tw-w-[600px] text-left tw-h-2/3 tw-flex tw-flex-col tw-justify-between">
                    <h1 class="text-h2">Nouvelles ambitions africaines</h1>
                    <div>Par <span class="tw-text-yellow-600"> Andy Loft </span> | 20 janvier, 2026</div>
                    <div class="tw-text-xl">
                        asperiores aliquam fuga eaque fugit voluptate nulla, dolores, maxime sed facilis culpa ipsum laboriosam nisi dicta!
                    </div>
                    <div class="tw-py-6 tw-px-8 tw-text-white tw-font-bold tw-bg-blue-800 tw-w-max tw-rounded-xl">En savoir plus...</div>
                </div>
            </template>
            <template v-slot:next="{ props }">
                <v-btn @click="props.onClick" class="tw-left-0">
                    <v-icon> mdi-arrow-right-thin-circle-outline </v-icon>
                </v-btn>
            </template>
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
        <div class="tw-flex tw-justify-around tw-w-full tw-h-48 tw-items-center">
            <v-img width="100px" height="100px" src="@/assets/img/alode.svg"></v-img>
            <v-img width="100px" height="100px" src="@/assets/img/harnix_grised.svg"></v-img>
            <v-img width="100px" height="100px" src="@/assets/img/logo.svg"></v-img>
        </div>
        <div class="tw-bg-blue-600 tw-h-screen tw-w-full tw-flex tw-flex-col tw-justify-around">
            <h1 class="tw-mt-2 text-h2 tw-font-bold tw-text-white">Qu'est-ce que Raise4Africa</h1>
            <div class="tw-w-1/2 tw-mx-auto tw-text-xl tw-text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores omnis molestiae laborum natus aliquam. Nam iste
                perspiciatis culpa? Impedit reiciendis itaque numquam culpa, nemo officiis ducimus repellat nulla sapiente eligendi!
            </div>
            <div class="tw-flex tw-justify-around tw-flex-wrap">
                <v-card v-for="n in 3" :key="n" width="400px" height="300px">
                    <v-card-title> Card-title </v-card-title>
                    <v-card-text class="text-left">
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Nemo animi in numquam beatae ipsa et quisquam. Quod temporibus eius culpa eum, nisi beatae quia
                        natus amet fuga accusamus aspernatur debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nostrum
                        placeat sint repellendus voluptatem, tempore delectus quam, commodi voluptas itaque, deserunt illo saepe tenetur
                        quia. Maiores quia soluta debitis. Atque!
                    </v-card-text>
                </v-card>
            </div>
        </div>
        <div class="tw-h-screen tw-my-48 tw-flex tw-flex-col tw-justify-between">
            <div class="text-h3 tw-font-bold tw-text-blue-800">Les activités sur Raise4Africa</div>
            <div class="tw-text-xl">
                Les activités sur Raise4Africa vous permettent de participer au <br />développement de votre communauté ! Participez !
            </div>
            <div class="tw-flex tw-my-10">
                <card-large-btn></card-large-btn>
            </div>
        </div>
        <v-img height="100vh" width="100%" src="@/assets/img/africa.svg">
            <v-row>
                <v-col cols="5" class="tw-ml-10">
                    <v-card>
                        <v-card-title> Card-title </v-card-title>
                        <v-card-text>
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Nemo animi in numquam beatae ipsa et quisquam. Quod temporibus eius culpa eum, nisi beatae
                            quia natus amet fuga accusamus aspernatur debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                            nostrum placeat sint repellendus voluptatem, tempore delectus quam, commodi voluptas itaque, deserunt illo saepe
                            tenetur quia. Maiores quia soluta debitis. Atque!
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="5" class="tw-mr-10">
                    <v-card>
                        <v-card-title> Card-title </v-card-title>
                        <v-card-text>
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Nemo animi in numquam beatae ipsa et quisquam. Quod temporibus eius culpa eum, nisi beatae
                            quia natus amet fuga accusamus aspernatur debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                            nostrum placeat sint repellendus voluptatem, tempore delectus quam, commodi voluptas itaque, deserunt illo saepe
                            tenetur quia. Maiores quia soluta debitis. Atque!
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="tw-ml-10">
                    <v-card>
                        <v-card-title> Card-title </v-card-title>
                        <v-card-text>
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Nemo animi in numquam beatae ipsa et quisquam. Quod temporibus eius culpa eum, nisi beatae
                            quia natus amet fuga accusamus aspernatur debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                            nostrum placeat sint repellendus voluptatem, tempore delectus quam, commodi voluptas itaque, deserunt illo saepe
                            tenetur quia. Maiores quia soluta debitis. Atque!
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-img>

        <div class="text-center tw-h-20 tw-bg-yellow-200 tw-flex tw-flex-col tw-justify-center tw-text-2xl tw-font-bold">
            Ce que nos utilisateur disent de nous !
        </div>

        <div class="bg-img tw-w-full tw-h-[85vh] tw-flex tw-flex-col tw-justify-between">
            <div class="triangle tw-mx-auto tw-top-0 tw-relative"></div>
            <v-spacer></v-spacer>
            <div class="tw-flex tw-justify-center">
                <v-card v-for="index in 3" :key="index" width="33%" class="tw-mx-4">
                    <v-card-text class="text-left">
                        <v-rating active-color="orange-lighten-1" length="6"></v-rating>
                        <div class="tw-text-2xl tw-font-bold">Bonne collaboration</div>
                        <div class="my-6">
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Nemo animi in numquam beatae ipsa et quisquam. Quod temporibus eius culpa eum, nisi beatae
                            quia natus amet fuga accusamus
                        </div>
                        <div class="tw-flex tw-items-center tw-my-4">
                            <v-avatar>
                                <v-img src="@/assets/img/logo.svg"></v-img>
                            </v-avatar>
                            <div>
                                <div>Qndre Lamma</div>
                                <div>14-12-23</div>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <v-spacer></v-spacer>
            <div
                class="tw-flex tw-justify-center tw-mb-10 tw-bg-gradient-to-br tw-w-max tw-px-24 tw-py-6 text-white tw-mx-auto tw-from-blue-800 tw-to-blue-300 tw-rounded-xl"
            >
                Laisser un avis
            </div>
        </div>
        <div class="tw-bg-yellow-500 tw-py-8">
            <div class="tw-w-1/2 tw-mx-auto">
                <div class="text-h4 font-weight-bold tw-my-10">Questions posées régulièrement</div>
                <div>Posez des questions sur tout ce que vous avez besoin de savoir de ce service</div>
                <v-expansion-panels class="tw-my-10">
                    <v-expansion-panel
                        v-for="index in 5"
                        :key="index"
                        title="Title"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
                    >
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>

<script>
import CardLargeBtn from '@/components/cards/CardLargeBtn.vue';
export default {
    name: 'HomeView',
    components: {
        CardLargeBtn
    },
    data() {
        return {
            items: [
                { src: require('@/assets/img/logo.svg') },
                { src: require('@/assets/img/logo.svg') },
                { src: require('@/assets/img/logo.svg') }
            ]
        };
    }
};
</script>
<style scoped>
.triangle {
    width: 150px;
    height: 75px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: rgb(254, 240, 138);
    transform: rotate(180deg);
}

.bg-img {
    background-image: url('../assets/img/gradient.svg');
}
</style>
