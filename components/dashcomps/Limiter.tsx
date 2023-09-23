const Limiter = ({bgcolor, progress, height}: any) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: '#D7DAE5',
		borderRadius: 40,
		margin: 0
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius: 40,
	}

		
	return (
        <div className='' style={Parentdiv}>
            <div style={Childdiv} />
        </div>
	);
};

export default Limiter;