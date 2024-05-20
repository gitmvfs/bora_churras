import React from "react";

export const ReceitaContext = React.createContext()

export function ReceitaProvider({ children }) {
    const receitas = [
        {
            nome: "Contra-filé na manteiga com alho e orégano",
            tempo: "30 minutos",
            ingredientes: [
                "500g de contrafilé em bifes",
                "1 colher (café) de sal",
                "3 colheres (sopa) de manteiga",
                "1 colher (chá) de Alho Granulado KITANO",
                "2 colheres (chá) de Orégano KITANO",
            ],
            preparo: [
                "Em uma tigela média, junte a carne, o sal, e misture. Reserve.",
                "Em uma frigideira, aqueça 2 colheres (sopa) de manteiga em fogo médio e frite a carne aos poucos, dourando os dois lados. Reserve em local aquecido.",
                "Na mesma frigideira, aqueça a manteiga restante, doure o Alho Granulado KITANO rapidamente, junte o Orégano KITANO. Regue a carne com a mistura sirva em seguida.",
            ],
            dicas: [
                "Ao grelhar a carne, não deixe secar muito, para que mantenha sua suculência.",
            ],
        },
        {
            nome: "Churrasco de maminha ao molho de Doritos",
            tempo: "1 hora",
            ingredientes: [
                "500g de contrafilé em bifes",
                "1 colher (café) de sal",
                "3 colheres (sopa) de manteiga",
                "1 colher (chá) de Alho Granulado KITANO",
                "2 colheres (chá) de Orégano KITANO",
            ],
            preparo: [
                "Em uma tigela média, junte a carne, o sal, e misture. Reserve.",
                "Em uma frigideira, aqueça 2 colheres (sopa) de manteiga em fogo médio e frite a carne aos poucos, dourando os dois lados. Reserve em local aquecido.",
                "Na mesma frigideira, aqueça a manteiga restante, doure o Alho Granulado KITANO rapidamente, junte o Orégano KITANO. Regue a carne com a mistura sirva em seguida.",
            ],
            dicas: [
                "Ao grelhar a carne, não deixe secar muito, para que mantenha sua suculência.",
            ],
        },
        {
            nome: "Cupim recheado com queijo na churrasqueira",
            tempo: "3 horas",
            ingredientes: [
                "5 dentes de alho amassados",
                "1 cebola picada",
                "1 colher de sopa de páprica",
                "200 g de manteiga em temperatura ambiente",
                "1/2 xícara de molho shoyu",
                "Suco de 1 laranja",
                "Sal a gosto",
                "2 kg de cupim",
                "Papel celofane",
                "Mussarela a gosto",
            ],
            preparo: [
                "Em uma tigela, misture o alho, a cebola, a páprica, a manteiga, o shoyu, o suco de laranja e o sal;",
                "Faça furos por toda superfície do cupim e mergulhe ele na vasilha de tempero, espalhando bem;",
                "Coloque a carne em cima do papel celofane, despeje o tempero também e embrulhe bem no papel, evitando que o líquido saia;",
                "Deixe assar na churrasqueira no nível mais alto por 3 horas, virando de lado após 1 hora e 30 minutos;",
                "Transfira o embrulho para uma forma, retire o papel celofane e coloque a carne em uma tábua;",
                "Usando uma faca, faça cortes no meio do cupim e coloque pedaços de mussarela dentro. Volte para a churrasqueira no braseiro médio;",
                "Assim que a carne dourar e o queijo derreter, retire do fogo e fatie para servir.",
            ],
            dicas: [
                "Lembre-se de comprar um papel celofane próprio para churrasqueira e não deixe de experimentar essa carne deliciosa!",
                "Para servir um prato completo, veja também receitas de farofa para churrasco que garantem uma combinação perfeita.",
            ],
        },
        {
            nome: "Coxa de frango na grelha",
            tempo: "30 minutos",
            ingredientes: [
                "2 colheres (chá) de pimenta-do-reino em grão esmagada",
                "1 colher (chá) de orégano desidratado",
                "2 pimentas dedo-de-moça picadas e sem sementes",
                "½ colher (chá) de páprica picante",
                "1 dente de alho esmagado",
                "¼ xícara (chá) de vinagre de vinho tinto",
                "¼ xícara (chá) de azeite de oliva",
                "Sal",
                "6 filés de coxa de frango",
            ],
            preparo: [
                "Ponha todos os ingredientes numa tigela (com exceção do frango) e misture bem.",
                "Reserve aproximadamente ¼ desta mistura.",
                "Ponha os filés de frango na tigela e os revista com a mistura.",
                "Deixe de molho por 30 minutos se quiser e tiver tempo.",
                "Faça as coxas de frango na grelha.",
                "Na hora de servir regue os filés com a mistura que foi reservada.",
            ],
            dicas: [],
        },
        {
            nome: "Cupim recheado com 4 queijos",
            tempo: "4 horas",
            ingredientes: [
                "1 peça de cupim (2 kg)",
                "1 colher de sopa de pimenta-do-reino",
                "1 colher de sopa de cominho",
                "1 colher de sopa de cebola em pó",
                "1 colher de sopa de alho em pó",
                "1 colher de sopa de páprica",
                "1 colher de sopa de sal (fino ou de parrilla)",
                "Azeite a gosto",
                "100g de manteiga",
                "50g de queijo parmesão",
                "50g de queijo provolone",
                "50g de queijo prato",
                "50g de queijo muçarela",
                "Papel celofane ou alumínio"
            ],
            preparo: [
                "Prepare o dry rub misturando todos os temperos: pimenta-do-reino, cominho, cebola em pó, alho em pó, páprica e sal.",
                "Banhe o cupim com azeite em toda a peça e em seguida passe o tempero.",
                "Leve para a grelha, mantendo-a a uma distância de 40 cm da brasa, para dourar todos os lados da peça e obter aquele sabor característico do churrasco.",
                "Embrulhe o cupim no papel celofane, adicione pedaços da manteiga e enrole-o bem, dando de 4 a 5 voltas. Amarre as laterais com barbante.",
                "Leve o cupim para a churrasqueira, mantendo-a a uma distância de 60 cm da brasa, e deixe assar por 3 a 4 horas, virando-o de hora em hora.",
                "Retire o cupim da churrasqueira, abra a embalagem e corte a peça ao meio.",
                "Distribua fatias de queijo parmesão, queijo prato e provolone ralado sobre o cupim.",
                "Feche o cupim, cubra com fatias de muçarela e finalize com mais provolone ralado por cima.",
                "Volte o cupim para a grelha e coloque uma forma por cima para derreter o queijo.",
                "Pronto para servir."
            ],
            dicas: [
                "Ao grelhar a carne, não deixe secar muito, para que mantenha sua suculência."
            ]
        },
        {
            nome: "Churrasco de Asa de Frango na Mostarda",
            tempo: "40 minutos",
            ingredientes: [
                "1,2 kg de asinhas e tulipas de frango",
                "4 colheres (sopa) de mostarda",
                "3 dentes de alho picados",
                "1 colher (sopa) de Azeite de Oliva TERRANO™",
                "1 colher (chá) de AJI-SAL®",
                "1 pitada de pimenta-do-reino"
            ],
            preparo: [
                "Em uma tigela grande, coloque o frango, a mostarda, o alho, o Azeite TERRANO™, o AJI-SAL® e a pimenta-do-reino, e misture.",
                "Cubra com filme-plástico e leve à geladeira para tomar gosto, por 30 minutos.",
                "Leve à churrasqueira, no braseiro médio (40 cm de distância da brasa) por 25 minutos, virando na metade do tempo, ou até dourar.",
                "Retire da churrasqueira e sirva em seguida."
            ],
            dicas: [
                "Se preferir, espete a asinha e a tulipa em espetos próprios para churrasco, deixando pequenos espaços entre os pedaços para evitar que o interior fique cru."
            ]
        },
        {
            nome: "Pão de Alho para Churrasco",
            tempo: "30 minutos",
            ingredientes: [
                "8 pãezinhos, de preferência mini baguetes",
                "4 colheres de sopa de maionese",
                "2 colheres de sopa de requeijão cremoso",
                "1 colher de sopa de manteiga amolecida",
                "3 dentes de alho médios",
                "200 gramas de queijo parmesão ralado",
                "Salsinha, cebolinha e orégano"
            ],
            preparo: [
                "Em uma tigela, coloque o alho espremido ou amassado bem miudinho.",
                "Acrescente a maionese, o requeijão, a manteiga e os temperos como salsinha, cebolinha e orégano.",
                "Misture bem todos os ingredientes até formarem uma pasta consistente.",
                "Deixe na geladeira por aproximadamente 10 minutos.",
                "Enquanto isso, corte as baguetes em pequenas fatias, tomando cuidado para não separar do formato do pão.",
                "Retire a pasta de alho da geladeira e passe generosamente em cada uma das fatias, tomando sempre o cuidado de não deixar romper a parte de baixo do pão.",
                "Se for assar o pão de alho na churrasqueira, deixe na parte superior por aproximadamente 5 a 10 minutos, dependendo da intensidade do calor.",
                "Se for assar no forno, pré-aqueça a 180º, coloque os pães em uma bandeja e deixe também por uns 10 minutos, até que eles fiquem dourados."
            ],
            dicas: [
                "Um dos segredos desta receita de pão de alho para churrasco é deixá-los no ponto em que fiquem bem crocantes por fora e macios por dentro.",
                "Sirva acompanhando os melhores cortes de carne para churrasco, um espetinho de carne, ou então como parte de um lanche à tarde, acompanhado de outras delícias.",
                "É possível ganhar um bom dinheiro vendendo pão de alho artesanal tanto para o consumidor final, como também para negócios locais."
            ]
        },
        {
            nome: "Linguiça Toscana Apimentada com Creme de Alho",
            tempo: "30 minutos",
            ingredientes: [
                "800g de Linguiça Toscana Apimentada Perdigão Na Brasa",
                "4 dentes de Alho",
                "100g de Margarina",
                "100g de Requeijão",
                "100g de Queijo Parmesão (a gosto)",
                "Orégano (a gosto)"
            ],
            preparo: [
                "Leve a linguiça para assar na churrasqueira.",
                "Em um recipiente, misture o alho picado, com a Margarina, requeijão e queijo parmesão.",
                "Misture bem.",
                "Após assada, corte a linguiça ao meio sem cortá-la até o final, deixando uma base para colocar o creme de alho.",
                "Coloque o creme de alho na linguiça.",
                "Leve a grelha novamente para derreter o creme."
            ],
            dicas: [
                "Para um sabor ainda mais intenso, experimente adicionar pimenta calabresa ao creme de alho.",
                "Sirva a linguiça toscana com creme de alho acompanhada de pão de alho e uma boa cerveja gelada."
            ]
        },
        {
            nome: "Coração de Frango (Coraçãozinho de Galinha) para Churrasco",
            tempo: "20 minutos",
            ingredientes: [
                "1 kg de coração de frango",
                "8 folhas de louro",
                "1 e 1/2 colheres de sopa de orégano seco",
                "1 e 1/2 colheres de sopa de molho shoyu",
                "1 colher de sopa de tempero pronto para carne",
                "1 colher de sopa de pimenta moída",
                "1 colher de sopa de manteiga",
                "1 copo de água morna"
            ],
            preparo: [
                "Limpe os corações primeiro. Retire o grosso da gordura saturada e as veias mais grossas.",
                "Certifique-se de remover qualquer resquício de sangue coagulado, mas deixe um pouco da gordura.",
                "Dissolva a manteiga na água morna.",
                "Coloque os corações em uma tigela e adicione o restante dos ingredientes.",
                "Misture bem, utilizando as mãos, e cubra, selando bem com plástico filme (PVC).",
                "Deixe na geladeira de um dia para o outro, para o tempero penetrar bem.",
                "Retire e faça espetinhos na hora de colocar no fogo."
            ],
            dicas: ["Sirva os espetinhos de coração de frango acompanhados de vinagrete e farofa para uma refeição completa de churrasco."]
        }
    ];

    const [receitaAtual, setReceitaAtual] = React.useState(null)

    return (
        <ReceitaContext.Provider value={{ receitas, receitaAtual, setReceitaAtual }}>
            {children}
        </ReceitaContext.Provider>
    )
}