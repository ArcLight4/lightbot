module.exports = (client, msg, prefix, args, db) => {
  let search = msg.content.slice(prefix.length + 'search '.length).replace(/ /g, '+')
  msg.channel.send(`http://google.com/search?q=${search}`)
}