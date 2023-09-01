import User from '../../models/User';
import connectDB from '../../utils/db';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
  
    const { fname,lname,email, password,gender,birthday,type } = req.body;
    const user = new User({ firstname:fname,lastname:lname,email:email,gender:gender,birthday:birthday,type:type, password: password });
    try {
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error.message);
      res.status(500).json({ error: error});
    }
  }
}