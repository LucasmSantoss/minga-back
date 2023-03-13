const controller = {

    read_all: (req, res) => {
        
        return res
                .status(200)
                .json({
                    success: true,
                    message: "Here you should see all chapters"
                })
    }
}

export default controller