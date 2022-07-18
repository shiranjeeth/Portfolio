import React from 'react'
import { Element } from 'react-scroll'
import './Project.css'
import Projectmap from './Projectmap'
const projects =[
    {
        id:1,
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAb1BMVEXiN0T////iOUbiNULhMD7hKzrhLjzukZfjPkrhKDjpa3ThJTX75ef+9/j2xsn40dTth4786+z98vP63+H52dvkRFDreIDwnKLyq7DoY23lUFvmWGLxoqftjJLqc3vsf4b0vMD0tbngGy7gESjfBiEKpczmAAAEjklEQVRoge2bWY/jKBCAcQow+LZjfGAnTtLz/3/jlCkcu9Pbo92H6UgreAn3V9QFiRQWxYqdfrYwFUcs1sB+uoCOmfp5LILVG6BUTm+iBm7gBm7gBm7gBm7gBm7gBm7gBm7gBm7gBm7gvpkL3/8U+Be5oIX5FvzXuDK1czaIn+byqoyiqJI/wQV4GhRMjtho5P+GC58KdXEhJId93NVBCgnbMH9O5CfFpHATxHXFRob7tbhCaMHhn7gnY4xyv4crhTVYZ5trFS8T54RlxiYnAGmXvlvHObvGl0muE/l0ubVZdi4qxfG0ZlixuZ0m6/ax1XC7x9MO3rl8rGtcuJYsq+uEM2mG2i0vR9xb9Odzna9H6BvsLE4gxnYdTXC3rnR6XUtruRx8K88jdC2u7r59M/wLVy7RsSRcjM3WyDvB0rurWnGjvuXRUaVM+XRc2TJR7K2LkLbex7Zf93eu6D9xR50cWrkFz2UeG/Wjr9Qp8NafzpWrPB/k17bZW9EtfeXqW3QcB0PT/aJ7mrpDNPE2Y9g2r9NV5jIejencyeLTfsB8gjI6CjXxV/veVuO2NFwqQcebTUWbi9SdqWnyIqOeqCV1nlMGNuFacv6Y3Ro5ku7iJEn4xVUL660Wiy/+fGKQ0qzWSNJOIfiDMEbQZ959DCR5wQ19oup4KpS1ljlt9DqN6ayCS+bEra30drqnr1yMTk2ukikuSJ+dZKTfaFKkiV57g5yVJHeaNXr+pczqpsmcgitJysrRifjolg045/KU8iVvMEmu0ljJyGsbjD7PtQSpuXeiqBI+Ahapl92gkQsFZ9MMk8suv6y+48rJydZMgvnNsxOwB/kFI8gsQGWkExAzaYKMk5e3m4vixnLufK5EhCajoDf5eBm+cOXkTJonaHlgbuUZla9db/ZBkJHD5C3vIyBnzgKFSnXKMrKSajZTatI4cnXhtfOaN6w7R3N9aI2p9OwPJSmM77/Iqgb4dbOqdpo4P1ZV1pgeGc1tgVvvCsDTYROXZMn9lfzkckNmK+O+7+fYS3d9kD/m44PCSIC4ePOCdFYtfq1HalP0IQpVjAGSNX7wkdHs+eEV/po3QJVH1ygoEqJ6oO6b1g6Cseo3wKysaMuPVRPNmGp1J9VsDlff29qQz+R3Okfj08aT63fbSqzt0UUzw5WXx9sJ85DPytXDOUxzv1OAR72Q3bbwDPKQqzFb65d7If2UJddQqPZWPUkPGTAXO8vXBmj3fJRmu4sKx6jkfk+gzo/ped6wO/eTWBHGrV627W4Koy/2ZwHrujO8VJ2HY3IQHely5hlxn4fMK7xN7ZbIs2v65f7lyXJNkhEL5tRuwUBiwszlOWuHaX1CYAZeiwFQrjICg8lV1lAwl2FelFDd0nULygzQl215X9QaNByq4ry+CODw2tr9WWJe90X6Vwy+XE7cv07AjcBW4c8uN4jPGFwDuJLWAja5fwzhqGT4ApLHR+2f33WHl9p/LZ9Xftnnf/k9JXADN3ADN3ADN3ADN3ADN3ADN3ADN3ADN3ADN3AD94/cd5V3/d/qXf8ve9P/6X4Doz1AlCBs0GIAAAAASUVORK5CYII=",
        title : "Zomato clone"
    },
    {
      id:2,
      img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAclBMVEX////lCRTkAADlABD++fn83N7mGyP3wMLweX71sLLvgoX1rK/lAAj+9vfrSlD72Nr97/DnEB3wfoLpPUP96uv95efsWl/4u771pan5x8roKzLrQEj70tTzlZnvbXL3trnnIivqMzvtY2nznJ/qU1fwjZCE6y5/AAAC40lEQVRoge2W2ZaiMBBAs7CpYVMQUGnB5f9/caoSkKU74Jx2nqbugyQCuUmoVMIYQRAEQRAEQRAEQRAEQRAE8b8QCgALWVeIxUDONqOadNluVGUsgN/y1VIBtS9oMILrFv8o8anQ4nUE56KCQiIlR6/rSW6QXs6ugvfIE3bjVUsZ2woudq+WfKgFcN0Jrk4JdOABf2xt49Xe/dwrEaW9UNAeqXqvuWn16hZ9xi6CS3FZ8somm3lTTZPD5MEVxWnKW+M193hj88L0c3Fk7AaXyKbVXi6KiVcd3EQDt+G3gomLcl3dYNthf9PirWA6PDeH/uOwF73HmTcZPxKj18QHevevGxavc1Zc3Et4a9rOdy90b+rNfuOFQIYWW2iutmqNl8Ny+KA3g4iA1qSwD7fzqvMH51lHFg4msGs7Lxf5yCubIAi+jv0amHo59wAI9QVvZbzVmhc/RciHdSR1QuqDce7F1csXvQyXnmoXtNqbniQslHSWr6xe3dFl7x1zx2bNK2t4xffm4y1+9vape9VrzVW9V8SpVMfT8H1PZVH4RR9c3+LKAdiiV8Cc4Sax4nUeCsKFfyyeryZobHvRy8vqLqrZR9av8zDxfF31Zh/14jKSJvuuePse/r13CNrBCzuRbFE8aeYnL6bUkfesLU7yhnfvVxc3C8feGFdkEcHm8Fz1ZmMv96JDA+slzVe93aoS8XT/VQcHHlXn5f0IdbB3DV6uFJ4pvDe8XY4ZeUOhd6KskUuZsvfuxNirs+EwXiEOxovnuiHb77vBKjX24i6o4Mt+Qf226nUbTFNY6KYubaObiYvkXpaFThQsdF13mDu/rp/PbXB7RLB/6/MkeMOTkPo4h+craY2s3suOoIKzGsu2dVnEeZYloWPt7bSJMEzg0aQq7pBaL4fWEy72ESNrZ32pPz9fiirO3xOtkLnms96h5bPV+7xeFo4Fv8Mt6qVcSRAEQRAEQRAEQRAEQRAEQfwb/gApjinSEUmDQwAAAABJRU5ErkJggg==",
      title : "Netfix clone"
  },
  {
    id:3,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHD5AqQ5eLjttoNoT6nEmapcNYOhneTjgWAA&usqp=CAU",
    title : "Alien website using Tailwind Css"
},

{
  id:5,
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkxXUzhnZOBxPUoLE46rynJ8i57laydT37Q&usqp=CAU",
  title : "Todo List"
},
{
  id:6,
  img:"https://img.freepik.com/premium-vector/transparent-user-login-form-template_6735-284.jpg",
  title : "Form Validation using React"
},
  
]

const Project = () => {
  return (
   
       
  <Element id="projects" className='project-container'>
  <h1 className='h1'>Projects</h1>
      <p className='p'>here are some of the projects i did</p>
      <div className='project-contain'>
      {projects.map((project)=>{
        return <div><Projectmap project={project}/></div>
      })}
       </div>
      </Element>    
  )
}

export default Project
