//
//  ViewController.swift
//  Spottr4
//
//  Created by Soohee Han on 4/30/16.
//  Copyright © 2016 Soohee Han. All rights reserved.
//

import UIKit


class ViewController: UIViewController {

    @IBOutlet weak var firstNameDerp: UILabel!
    
    @IBOutlet weak var aboutMe: UILabel!
    
    
    
    var firstName:String!
    var lastName:String!
    var zipCode:String!
    var bench:String!
    var deadlift:String!
    var squat:String!
    var out1:String!
    var out2:String!
    var out3:String!
    //add 5
    
    
    
    func resizeImage(image: UIImage, newWidth: CGFloat) -> UIImage {
        
        let scale = newWidth / image.size.width
        let newHeight = image.size.height * scale
        UIGraphicsBeginImageContext(CGSizeMake(newWidth, newHeight))
        image.drawInRect(CGRectMake(0, 0, newWidth, newHeight))
        let newImage = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        return newImage
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
//        firstNameDerp.text = firstName
        //add 5
        //http://107.170.38.228:8080/ ...
        let inputString = "http://107.170.38.228:8080/" + firstName + "/" + lastName + "/" +  zipCode + "/" + squat + "/" + deadlift + "/" + bench
        
        
        let serverurl = NSURL(string: inputString)!
//        let request1: NSURLRequest = NSURLRequest(URL: serverurl)
//        let response:AutoreleasingUnsafeMutablePointer<NSURLResponse?>=nil
        
        let task = NSURLSession.sharedSession().dataTaskWithURL(serverurl){
            (data,response,error) in
            let notthis = NSString(data: data!, encoding:NSUTF8StringEncoding) as String?
            //                self.firstNameDerp.text = feedback as String?
//            self.firstNameDerp.text = notthis
//            let notthisArray = notthis!.characters.split{$0 == ","}
            let notthisArray = notthis!.componentsSeparatedByString(",")
            self.out1 = notthisArray[0]
            self.out2 = notthisArray[2]
            self.out3 = notthisArray[6]
//            self.firstNameDerp.text = meow
            
            
            
            
            
        }
        task.resume()
        
//        dispatch_async(dispatch_get_main_queue(), { () -> Void in
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, Int64(0.75 * Double(NSEC_PER_SEC))), dispatch_get_main_queue()) {()->Void in
            if (self.out3 != nil) {
                self.aboutMe.text = self.out2 as String?
                self.firstNameDerp.text = self.out1 as String?
                            if let url = NSURL(string: self.out3 ) {
                                if let data = NSData(contentsOfURL: url) {
                                    //ProfileImage.image = UIImage(data: data)
                                    self.profileImage.image = self.resizeImage(UIImage(data: data)!, newWidth: 400)
                                }
                            }

            }
//            if let url = NSURL(string: self.out3 ) {
//                if let data = NSData(contentsOfURL: url) {
//                    //ProfileImage.image = UIImage(data: data)
//                    self.profileImage.image = self.resizeImage(UIImage(data: data)!, newWidth: 400)
//                }
//            }

            
        }
    
        if let url = NSURL( string: "https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/13094180_1080726475318168_6312123028508607885_n.jpg?oh=a7182dff2a53f06881879abe241e8475&oe=57B4DECF" ) {
            if let data = NSData(contentsOfURL: url) {
                //ProfileImage.image = UIImage(data: data)
                self.profileImage.image = self.resizeImage(UIImage(data: data)!, newWidth: 400)
            }
        }

//"https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/13094180_1080726475318168_6312123028508607885_n.jpg?oh=a7182dff2a53f06881879abe241e8475&oe=57B4DECF"
        

        

    }
   @IBOutlet weak var profileImage: UIImageView!
      override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()

        // Dispose of any resources that can be recreated.
        
    }
    
    

}



class ViewController2: UIViewController {
    
    @IBOutlet weak var FirstName: UITextField!
    @IBOutlet weak var LastName: UITextField!
    @IBOutlet weak var ZipCode: UITextField!
    @IBOutlet weak var Bench: UITextField!
    @IBOutlet weak var Deadlift: UITextField!
    @IBOutlet weak var Squat: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        if (segue.identifier == "segue1") {
            var svc = segue.destinationViewController as! ViewController
            
            svc.firstName = FirstName.text
            svc.lastName = LastName.text
            svc.zipCode = ZipCode.text
            svc.bench = Bench.text
            svc.deadlift = Deadlift.text
            svc.squat = Squat.text

        }
    }
    
}