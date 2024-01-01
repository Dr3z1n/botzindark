const ownerNumber = ["556286231599@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '556286231599' 
// mude para seu numero

const menuimg = 'https://i.imgur.com/MxIicYj.jpg'
// Link da foto do menu

const menupack = 'https://telegra.ph/file/18fdeab03221a958fc41b.jpg'
//menu de pack

const menupres = 'https://telegra.ph/file/f69297a8ee9ccfd67e88a.jpg'
//menu de presente

const registeruser = false
// Se é obrigatório o usuário se registrar para usar os comandos

const antinewchatmsg = 'O anti chat novo está ativado e você não é meu proprietário, logo será bloqueado'
//mensagem do antinewchat

var prefixs = ['!', '.', '#', '$', '&', '/', '>', '?']
// prefixos

const antipvmsg = '*🚫 PV BLOQUEADO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const backgroundwelcomeimg = `https://wallpaperaccess.com/full/1078161.jpg`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `
`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const prefix = '!' 
// prefixo

const blockedmsg = '*🚫 Cara pqp tu ta bloqeuado man pelo dr3z1n, n enche o saco krlh 🚫*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫 Essa poha de comando não está disponivel krlh 🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Ora ora ora, parece que alguém mandou uma mensagem proibida, hora da punição*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Ae adm tu é adm e mandou uma msg proibida, n tô aq agr, mas faz isso mais n*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = '*Pornozão n é permitido flw otario*'
// mensagem de ban no antiporn

const adminmsgporn = '*Poha adm mandou porno aq pode n, n vou banir mas n faz mais isso.*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = '*Fdp não leu as regras de não mandar links, agr tome ban*'
// mensagem de ban no antilink

const adminmsglink = '*O fudido do adm mandou link aq, mas n vou banir*'
// mensagem de quando adm manda link

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.ibb.co/Fn79TPV/drezin-bot-bomdia.jpg'
const textmsgday = 'Bom dia o caralho poha vtmnc'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/7ntvNLy/op-o03.jpg'
const textmsgeve = `Boa tarde u carai poha me deixa`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/QDHd48z/op-o02.jpg'
const textmsgnig = 'Boa noite fi du cão tomara q amanhã seja pior'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

//const msgerr = 'Poh mané desculpa mas n achei aq na'
// mensagem de erro

const notregister = `*Man esse comando não está registrado pfvr veja o menu para ver os comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Muito obrigado meu caro, mas não me bajule muito'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Pelo visto alguém aqui quer que eu faça uma visitinha na sua casa'
const cadebot = 'Estou aqui meu jovem, só dizer os comandos'
const botfdp = 'Que falta de respeito meu caro!! Vou te ensinar a ter bons modos mais tarde'
const botgostoso = 'Muito obrigado meu jovem, pena que não posso dizer o mesmo'
const botfofo = 'Muito obrigado meu jovem, pena que não posso dizer o mesmo'
const botbaianor = 'Não me compare com humanos a não ser que eu vá te ensinar bons modos'
const botcorno = 'Você se enganou humano, não sou da sua espécie de bovino humanizado'
const botputa = 'Você já se perguntou onde sua mãe está agora?'
const botgay = 'Atrações sexuais, são tão primitivas, tipíco de um humano'
const botviado = 'Atrações sexuais, são tão primitivas, tipíco de um humano'
const numbotfeio = 'Pelo visto alguém aqui quer que eu faça uma visitinha na sua casa'

// MENSAGENS DE RESPOSTAS

let resp = {
espere: "Carma mermão",
erro: "Poh deu mó erro aq achei não",
erropala: "*Cade a palavra animal*",
nopala: "*Não esta incluso essa palavra*"
}

// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Um momento meu jovem... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Desculpe-me senhor, mas houve falha ao converter para sticker ❌',
        Iv: '❌ Senhor, este link é inválido ❌'
    },
    only: {
        group: '❌ Infelizmente este comando está disponível somente para grupos meu caro! ❌',
        ownerG: '❌ Este comando somente meu dr3z1n e outros pode usar! ❌',
        ownerB: '❌ Este comando somente o grupo do dr3z1n pode usar! ❌',
        admin: '❌ Se ponha no seu lugar membro comum ❌',
        Badmin: '❌ Como posso fazer esse comando se eu não sou administrado deste grupo! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN: Dr3z1n\n' 
+ 'ORG:LINDU;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=556286231599:+55 62 8623-1599\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`

// Nem ouse mexer aqui se n quiser que de erro
exports.prefixs = prefixs
exports.registeruser = registeruser
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.limitqnt = limitqnt
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.notregister = notregister
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
//exports.msgerr = msgerr
exports.mess = mess
exports.resp = resp
exports.prefix = prefix
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.menuimg = menuimg
exports.menupack = menupack
exports.menupres = menupres