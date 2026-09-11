function line(level,args){console.log(new Date().toISOString(),`[${level}]`,...args);}
module.exports={info:(...a)=>line("INFO",a),warn:(...a)=>line("WARN",a),error:(...a)=>line("ERROR",a),debug:(...a)=>line("DEBUG",a)};
