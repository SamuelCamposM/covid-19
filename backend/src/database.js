import { connect } from 'mongoose';
import { mongodb } from './keys';

export function conectarDB(params) {
    try {
        connect(mongodb.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('conectado a MongoDB');
        
    } catch (error) {
       console.log(error);
       
    }
}