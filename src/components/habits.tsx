'use client'

export function Habits() {
  const habits = {
    "beber água": {
      "2023-12-16": true,
      "2023-12-17": false,
      "2023-12-18": true,
    },

    "estudar programação": {
      "2023-12-16": true,
      "2023-12-17": false,
      "2023-12-18": false,
    }
  };

  const conditionalRendering = () => {
    if(habits === null || Object.keys(habits).length === 0) {
      return(
        <h1 className="text-xl text-center mt-20">Você não tem hábitos <br /> cadastrados</h1>
      )
    }

    return(
      <>
        {Object.entries(habits).map(([habit, habitStreak]) => (
          <div className="w-full px-8" key={habit}>
            <div className="w-full flex justify-between items-center">
              <span>{habit}</span>
              <button>delete</button>
            </div>
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="text-neutral-100 font-sans flex flex-col
     items-center pt-16 gap-5">
      {conditionalRendering()}
    </div>
  )
}