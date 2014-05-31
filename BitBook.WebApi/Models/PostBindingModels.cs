using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BitBook.WebApi.Models
{
    public class PostBindingModels
    {

    }
    public class PostStatusBindingModel { 
        [Required]
        [Display(Name = "Status")]
        public string Description { get; set; }
        
        [Required]
        public string PostedBy { get; set; }        
    }
}