import Image from "next/image";
const ColorSelector =({

  colors,
  selectedColor,
  setSelectedColor,

})=>{
   return (

    <>

      <h3>

        Colour:

        <strong> {selectedColor.name}</strong>

      </h3>

      <div style={{display:"flex",gap:"15px"}}>

        {colors.map((color)=>(

          <div
            key={color.id}
            onClick={()=>setSelectedColor(color)}
            style={{
              border:
                selectedColor.id===color.id
                ? "3px solid black"
                : "1px solid #ddd",

              padding:"3px",
              borderRadius:"8px",
              cursor:"pointer",
            }}
          >

            <Image
              src={color.thumbnail}
              width={60}
              height={80}
              alt={color.name}
            />

          </div>

        ))}

      </div>

    </>

  );
}

export default ColorSelector