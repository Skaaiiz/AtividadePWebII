import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis dignissimos vitae explicabo odio nobis reiciendis fugiat suscipit sunt! Quam sunt cum totam vero saepe maxime accusamus expedita molestiae laudantium nam quidem libero illum atque exercitationem odio dicta, tenetur vel ducimus doloribus non. Facere delectus iusto neque. Vero, eos debitis.
          </p>

          <br />

          <p className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta et provident libero quia voluptatum hic facilis sapiente ipsum eligendi? Laboriosam unde quis nulla laudantium aperiam totam harum quidem, praesentium rem esse earum! Autem minus praesentium magni magnam harum id aspernatur, eaque, obcaecati natus quo doloremque, nulla ea nostrum recusandae ducimus!
          </p>
      </div>
    </div>
  )
}

export default About