import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

export function ReceitaScreen() {
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
  ];
  return (
    <View>
      <FlatList data={receitas} renderItem={RenderItem} />
    </View>
  );
}

function RenderItem({ item }) {
  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.nome}</Text>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.tempo}</Text>
      </View>

      {/* INGREDIENTES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>INGREDIENTES</Text>
        <FlatList
          data={item.ingredientes}
          renderItem={({ item }) => (
            <Text style={styles.sectionContent}> - {item}</Text>
          )}
        />
      </View>

      {/* PREPARO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PREPARO</Text>
        <FlatList
          data={item.preparo}
          renderItem={({ item }) => (
            <Text style={styles.sectionContent}> - {item}</Text>
          )}
        />
      </View>

      {/* DICAS */}
      {/* Retorna a seção de dicas, caso exista alguma na receita em questão */}
      {item.dicas && item.dicas != 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DICAS</Text>
          <FlatList
            data={item.dicas}
            renderItem={({ item }) => (
              <Text style={styles.sectionContent}> - {item}</Text>
            )}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 8,
    backgroundColor: "#FF5D00",
    borderRadius: 5,
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    textTransform: "uppercase",
  },
  sectionContent: {
    fontSize: 16,
    marginTop: 5,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  time: {
    fontSize: 22,
  },
});
