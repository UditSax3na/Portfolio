'use server';
const db = require('better-sqlite3')('portfolio.db');

export async function POST(req) {
    try{
        const result = db.prepare('SELECT * FROM portfolio_table').all();
        if (result){
            return new Response(JSON.stringify({result: result}),{status:200,headers:{'Content-Type':'application/json'}})
        }else{
            return new Response(JSON.stringify({error:'some issue'},{status:500,headers:{'Content-Type':'application/json'}}));
        }
    }catch(e){
        return new Response(JSON.stringify({error:e},{status:500,headers:{'Content-Type':'application/json'}}));
    }
}