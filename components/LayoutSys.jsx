import React from 'react'

const LayoutSys = ({focusindex, Setfocusindex, element, maxsize}) => {
  const update_=(e)=>{
    let k = 1;
    if (e==0){
      k = focusindex-k;
    }else if(e==1){
      k = focusindex+k;
    }else{
      k = k
    }
    if (k>=maxsize){
      k=0;
    }else if(k<0){
      k = maxsize-1;
    }else{
      k=k
    }
    Setfocusindex(k);
  }
  return (
    <>
      <div className="firstitem item  p-1 flex flex-col ">
        <div className="titlepj rounded-3xl p-2 text-center">{element.title}</div>
        <div className="descpj rounded-3xl p-2 mt-5">{element.desc}</div>
      </div>
      <div className="seconditem flex item rounded-3xl px-1">
        <img src={element.project_preview} alt="Project Preview"/>
        <div className="subh absolute mt-4 rounded-3xl px-4 py-2">
          Project Preview
        </div>
        <div className='abtn absolute le rounded-xl'>
          <img src="/arrow-left.svg" alt="leftbutton" onClick={()=>update_(0)} />
        </div>
        <div className='abtn absolute ri rounded-xl'>
          <img src="/arrow-right.svg" alt="rightbutton" onClick={()=>update_(1)} />
        </div>
      </div>
      
      <div className="item thirditem flex flex-col justify-between">
        <div className="first-item flex flex-col justify-center">
          <div className="titlepj px-4 py-2 text-xl mb-2 mx-5 text-center">Based on</div>
          <div className="miniconlist flex justify-evenly flex-wrap mt-2">
            {element.basedon.map((ele,i)=><div className='minicon px-3 py-1' key={i}>{ele}</div>)}
          </div>
        </div>
        <div className="second-item flex flex-col justify-center">
          <div className="titlepj px-4 py-2 text-xl mt-2 mb-2 mx-5 text-center">Available</div>
          <div className="linkholderp flex justify-center"><a className="linkholder px-3 py-1 mt-2" href={element.available}>visit?</a></div>
        </div>
      </div>
    </>
  )
}

export default LayoutSys;