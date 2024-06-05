import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config.js';

export const register = async (req, res) => {
	console.log(req.body); // Log the request body to see what data is being received

	const { username, email, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const newUser = await prisma.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			},
		});

		res.status(201).json(newUser);
	} catch (error) {
		res.status(501).json({ error: 'User registration failed' });
	}
};

export const login = async (req, res) => {

    const { username, password } = req.body;

    try {
        
        const user = await prisma.user.findUnique({ where: { username } });

        if (!user) return res.status(404).json({ error: 'User not found' });

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return res.status(401).json({ error: 'Invalid Password' });

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });

    } catch (error) {
        
        res.status(500).json({ error: 'Login Failed' });

    }

};