import ContactForm from '@/components/ContactForm'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Phone, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Contact - Abhishek Sharma',
  description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Let's Work Together</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a project in mind or just want to chat, I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-6">
              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                      <Mail className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300 text-sm">abhi9161.sharma@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Location</h3>
                      <p className="text-gray-300 text-sm">India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                      <Calendar className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Schedule a Call</h3>
                      <p className="text-gray-300 text-sm">Let's discuss your project</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
