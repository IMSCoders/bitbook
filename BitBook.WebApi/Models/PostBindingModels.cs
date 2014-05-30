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
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.")]
        public string Description { get; set; }
        
        [Required]
        
        public ObjectId PostedBy { get; set; }        
    }
}