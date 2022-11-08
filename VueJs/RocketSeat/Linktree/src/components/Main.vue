<template>
    <main>
        <section class="section">
            <div class="myInfos">
                <h1 class='title'>{{ titleGames }}</h1>
                <h4 class='subtitle'>{{ subtitleGames }}</h4>
                <ul class="lists">
                    <li class="list" v-for="item in myGames" :key="item.id">
                        <img class='imageGame' :src="item.image" :alt="item.name">
                        <p class='name'>{{ item.name }}</p>
                    </li>
                </ul>
            </div>

            <div class="myInfos">
                <h1 class='title'>{{ titleChannels }}</h1>
                <h4 class='subtitle'>{{ subtitleChannels }}</h4>
                <div>
                    <ul class="lists">
                        <li class="list" v-for="item in myChannels" :key="item.id">
                            <img class='imageChannels' :src="item.image" :alt="item.name">
                            <p class="nameChannels">{{ item.name }}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="myInfos">
                <h1 class='title'>{{ titleMidia }}</h1>
                <h4 class='subtitle'>{{ subtitleMidia }}</h4>
                <div>
                    <ul class="lists">
                        <li class="list" v-for="item in myMidia" :key="item.id">
                            <a :href="item.link" target='_blank'>
                                <img class='socialIcon' :src="item.image" :alt="item.name">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'Main',
        data() {
            return {
                titleGames: 'Meus Jogos',
                subtitleGames: 'Os games que eu mais curto jogar!',
                titleChannels: 'Canais e streamers',
                subtitleChannels: 'Lista de canais e transmissões que não perco!',
                titleMidia: 'Minhas redes',
                subtitleMidia: 'Se conecte comigo agora mesmo!',
                myGames: [
                    {
                        image: 'https://image.api.playstation.com/vulcan/img/rnd/202103/1519/1qiQsqTGnDhQ1vK4xW8Ds6Zb.png', 
                        name: 'Rainbow Six Siege', 
                    },
                    {
                        image: 'https://image.api.playstation.com/vulcan/img/rnd/202201/0414/gXlQ9CTsFCyKoVUjRNEYC3v1.png',
                        name: 'Paladins'
                    },
                    {
                        image: 'https://upload.wikimedia.org/wikipedia/pt/2/21/Mortal_Kombat_11_capa.jpg',
                        name: 'Mortal Kombat 11'
                    },
                    {
                        image: 'https://streetfighter.com/assets/images/title_bnr/title_3.jpg',
                        name: 'Street Fighter'
                    }
                ],
                myChannels: [
                    {
                        image: 'https://yt3.ggpht.com/xqhIoXspeX7eqouJvNHl1xqpv9213Pl26ENZbuouXxO2RlDadjsveNXfgnj8GTUk7thFYUkVRg=s900-c-k-c0x00ffffff-no-rj', 
                        name: 'Alura', 
                    },
                    {
                        image: 'https://yt3.ggpht.com/mj36rtBdiHuHWq0VsOUpYZMBJNDJlzakQcXUOJtdLZmK7k_AiAP_5B6TNm6-mgoateVbc4rClg=s900-c-k-c0x00ffffff-no-rj',
                        name: 'Júlio Cocielo'
                    },
                    {
                        image: 'https://sampaingressos.com.br/fotosEspetaculos/foto_113128.jpg',
                        name: 'Os 4 amigos'
                    },
                    {
                        image: 'https://yt3.ggpht.com/ytc/AMLnZu8R-D5gB9gPb5G8g2s2i2w6ToSet9AYpILjno8cpQ=s900-c-k-c0x00ffffff-no-rj',
                        name: 'Muca Muriçoca'
                    }
                ],
                myMidia: [
                    {
                        image: 'https://user-images.githubusercontent.com/74377158/189733315-2ed46056-0af4-4b13-b6ba-d3bb3d29ef83.png', 
                        link: 'https://github.com/Vinicius-Boschi', 
                        name: 'icone github'
                    },
                    {
                        image: 'https://user-images.githubusercontent.com/74377158/189733318-2e1e2a0f-d9c2-4d6f-9a7b-f5436205649d.png', 
                        link: 'mailto:vinicius.yg@gmail.com', 
                        name: 'icone email'
                    },
                    {
                        image: 'https://user-images.githubusercontent.com/74377158/189733322-8941d2df-63cb-4f2a-baa0-ea3d64365857.png',
                        link: 'https://portfolioviniciusboschi.herokuapp.com/',
                        name: 'icone portfolio'
                    },
                    {
                        image: 'https://user-images.githubusercontent.com/74377158/189733324-5820a3f8-34d9-49a3-8965-f320e0db5cc0.png',
                        link: 'https://codepen.io/vinicius-simoes',
                        name: 'icone codepen'
                    },
                    {
                        image: 'https://user-images.githubusercontent.com/74377158/189733326-43ffad28-49ee-411f-8675-796d55c3ab1b.png',
                        link: 'https://www.linkedin.com/in/viniciusboschi/',
                        name: 'icone linkedin'
                    }
                ]
            }
        }
    }
</script>

<style>
    .section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;
        max-width: 700px;
        width: 100%;
    }

    .myInfos {    
        background-color: #2A2634; 
        padding: 1.5rem;
        margin: 1rem;
        background-image: linear-gradient(to right, #9572FC, #43E7AD, #E2D45C);
        background-size: 100% 6px;
        background-repeat: no-repeat;
        border-radius: 8px;
    }

    .title {
        color: #FFF;
        font-size: 20px;
    }

    .subtitle {
        color: #A1A1AA;
        font-size: 14px;
        font-weight: normal;
        line-height: 3;
    }

    .lists {
        display: flex;
        margin: 2rem 0;
        flex-wrap: wrap;
    }

    .list {
        list-style: none;
        margin-right: 2rem;
    }

    .imageGame {
        border-radius: 8px;
        width: 100px;
        height: 120px;
        transition: all .3s;
    }

    .name, .nameChannels {
        color: #FFF;
        margin: 1rem 0 2rem 0;
        width: 100px;
    }

    .nameChannels {
        text-align: center;
        width: 100%;
    }

    .imageChannels {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid #443E54;
        transition: all .3s;
    }

    .socialIcon {
        width: 32px;
        height: 32px;
        transition: all .3s;
        margin-bottom: 2rem;
    }

    .imageChannels:hover, .imageGame:hover, .socialIcon:hover {
        transform: scale(1.1);
    }
</style>