// import './style.less';
export const DataStatistic = props => {
  return (
    <div className="dataStatistic_content">
      {props.children}
    </div>
  );
}
/*使用:
    <DataCircle x1="90%" x2="100%" count={["1"]} strokeWidth="36" strokeDasharray={["110 1069"]} transform={["rotate(-90,100 100)"]} strokeLinecap="none" />
    <DataCircle x1="0%" x2="100%" count={["2"]} strokeWidth="42" strokeDasharray={["220 1069"]} transform={["rotate(-90,100 100)"]} strokeLinecap="none"/>
    <DataCircle x1="30%" x2="100%" y1="70%" y2="100%" count={["31","32"]} strokeWidth="42" strokeDasharray={["110 1069","110 1069"]} transform={["rotate(0,100 100)","rotate(180,100 100)"]} strokeLinecap="none"/>
    <DataCircle x1="0%" x2="100%" count={["4"]} strokeWidth="30" strokeDasharray={["110 1069"]} transform={["rotate(0,100 100)"]} strokeLinecap="round"/>
    <DataCircle x1="50%" x2="100%" count={["5"]} strokeWidth="30" strokeDasharray={["110 1069"]} transform={["rotate(90,100 100)"]} strokeLinecap="none"/>
  */
export const DataCircle = props => {
  var {x1,x2,strokeWidth,strokeDasharray,transform,strokeLinecap,count} = props;
  return (
    <svg width="200" height="200">
          {count.map((item)=>{
            var y1 = props.y1 ? props.y1 : "0%";
            var y2 = props.y2 ? props.y2 : "0%";
            return (<defs key={item}>
              <linearGradient id={item} x1={x1} y1={y1} x2={x2} y2={y2}>
                <stop offset="0%" className={"base-opacity  dataStatistic_content__shade" + item + "-start"} />
                <stop offset="100%" className={"base-opacity dataStatistic_content__shade" + item + "-end"} />
              </linearGradient>
            </defs>)
          })
          }
        <circle cx="100" cy="100" r="70" strokeWidth="30" stroke="#342752" fill="none"/>
        {count.map((item,index)=>{
          return(
            <circle key={item} cx="100" cy="100" r="70" strokeWidth={strokeWidth} strokeDasharray={strokeDasharray[index]} strokeDashoffset="0" stroke={"url(#"+item+")"} fill="none" transform={transform[index]} strokeLinecap={strokeLinecap}/>
          )
        })}
    </svg>
);
}

export const PhysicalData  = props => {
  return (
      <svg width="200" height="200">
          <defs>
            <linearGradient id="grad1" x1="90%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="base-opacity dataStatistic_content__shade1-start" />
              <stop offset="100%" className="base-opacity dataStatistic_content__shade1-end" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="70" strokeWidth="30" stroke="#342752" fill="none"/>
          <circle cx="100" cy="100" r="70" strokeWidth="36" strokeDasharray="110 1069" strokeDashoffset="0" stroke="url(#grad1)" fill="none" transform="rotate(-90,100 100)"/>
      </svg>
  );
}

export const VirtualData  = () => {
  return (
    <svg width="200" height="200">
       <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="base-opacity dataStatistic_content__shade2-start" />
          <stop offset="100%" className="base-opacity dataStatistic_content__shade2-end" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="70" strokeWidth="30" stroke="#342752" fill="none"/>
      <circle cx="100" cy="100" r="70" strokeWidth="42" strokeDasharray="220 1069" strokeDashoffset="0" stroke="url(#grad2)" fill="none" transform="rotate(-90,100 100)"/>
    </svg>
   
  );
}

export const NetEquipment  = () => {
  return (
    <svg width="200" height="200">
        <defs>
          <linearGradient id="grad3-1" x1="30%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="base-opacity dataStatistic_content__shade31-start" />
            <stop offset="100%" className="base-opacity dataStatistic_content__shade31-end" />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad3-2" x1="0%" y1="70%" x2="0%" y2="100%">
            <stop offset="0%" className="base-opacity dataStatistic_content__shade32-start" />
            <stop offset="100%" className="base-opacity dataStatistic_content__shade32-end" />
          </linearGradient>
        </defs>
       <circle cx="100" cy="100" r="70" strokeWidth="30" stroke="#342752" fill="none"/>
       <circle cx="100" cy="100" r="70" strokeWidth="42" strokeDasharray="110 1069" strokeDashoffset="0" stroke="url(#grad3-1)" fill="none" transform="rotate(0,100 100)"/>
       <circle cx="100" cy="100" r="70" strokeWidth="42" strokeDasharray="110 1069" strokeDashoffset="0" stroke="url(#grad3-2)" fill="none" transform="rotate(180,100 100)"/>
    </svg>
   
  );
}

export const Server  = () => {
  return (
    <svg width="200" height="200">
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="base-opacity dataStatistic_content__shade4-start" />
          <stop offset="100%" className="base-opacity dataStatistic_content__shade4-end" />
        </linearGradient>
      </defs>
        <circle cx="100" cy="100" r="70" strokeWidth="30" stroke="#342752" fill="none"/>
        <circle cx="100" cy="100" r="70" strokeWidth="30" strokeDasharray="110 1069" strokeDashoffset="0" stroke="url(#grad4)" fill="none" transform="rotate(0,100 100)" strokeLinecap="round"/>
    </svg>
  );
}

export const CloudStorage  = () => {
  return (
    <svg width="200" height="200">
      <defs>
        <linearGradient id="grad5" x1="50%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="base-opacity dataStatistic_content__shade5-start" />
          <stop offset="100%" className="base-opacity dataStatistic_content__shade5-end" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="70" strokeWidth="30" stroke="#342752" fill="none"/>
      <circle cx="100" cy="100" r="70" strokeWidth="30" strokeDasharray="110 1069" strokeDashoffset="0" stroke="url(#grad5)" fill="none" transform="rotate(90,100 100)" />
    </svg>
  );
}
