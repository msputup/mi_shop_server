module.exports = (ctx, res) => {
	if(res.status == 'ok') {
		ctx.body = {
			status: true,
			data: res.data
		}
	} else {
		ctx.body = {
			status: false,
			err: res.err
		}
	}
};
