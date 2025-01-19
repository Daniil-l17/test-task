import axios from 'axios';

export const axiosBase = axios.create({
	baseURL: 'https://hcateringback-dev.unitbeandev.com/api/',
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNzMyMDQwMH0.irDxiUhDqdoqWteasfeTwM8MEvtLgmCt6nP64EbzWCOccl5SsIPRNKSh0uNhMCyhSqGNn0V0mB9s3ZpN2izaRA'
	}
});
