import React from "react"

export default function App() {
  const [keyPress, setKeypres] = React.useState("")

  const keyboardKeys = [
    {
      name: "Q",
      keyCode: 81,
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      name: "W",
      keyCode: 87,
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      name: "E",
      keyCode: 69,
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      name: "A",
      keyCode: 65,
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      name: "S",
      keyCode: 83,
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      name: "D",
      keyCode: 68,
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      name: "Z",
      keyCode: 90,
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      name: "X",
      keyCode: 88,
      sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      name: "C",
      keyCode: 67,
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ]

  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      handle(e.key.toUpperCase())
    })
  }, [])

  function handle(selected) {
    const t = document.getElementById(selected)
    t.play()
    setKeypres(selected)
  }

  const drumPad = keyboardKeys.map((item) => (
    <div
      onClick={() => handle(item.name)}
      id={item.sound}
      key={item.sound}
      className="drum-pad"
    >
      {item.name}
      <audio src={item.sound} id={item.name} className="clip"></audio>
    </div>
  ))

  return (
    <div id="drum-machine">
      <div id="display">{keyPress}</div>
      <div className="drum-pads">{drumPad}</div>
    </div>
  )
}
