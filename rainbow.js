client.on("ready", () => {
    function rainbow() {
      client.guilds.get('id server').roles.find("name", "Role Name").setColor("RANDOM");
    }
    setInterval(rainbow, 10000);//rainbow delay time (ms)
  })
