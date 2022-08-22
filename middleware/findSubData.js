const getListOfAnnouncementBySubCategory = async (subCategory) => {
   
    try {

      return await Announcement.find({
        subCategory: { $regex: subCategory, $options: "i" },
      });
        
    } catch (error) {

      return { error: true, message: error, status: 400 };
    
    }
  
};

module.exports = getListOfAnnouncementBySubCategory;