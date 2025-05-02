import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, CheckCircle2, Clock, Users } from "lucide-react"

export default function RulesPage() {
  return (
    <div className="container py-12 px-4 md:px-6 circuit-overlay">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center shiny-text">Rules & Guidelines</h1>
        <p className="text-green-400 mb-8 text-center max-w-2xl mx-auto">
          Please review all rules and guidelines carefully before participating in the hackathon.
        </p>

        <div className="grid gap-8">
          <Card className="bg-black/80 border-green-500/30 cyber-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Clock className="h-5 w-5 text-green-400" />
                <span>Hackathon Format</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300">HackThrone 2025 is structured as a two-round hackathon:</p>

                <div className="pl-4 border-l-2 border-green-600 space-y-4">
                  <div>
                    <h3 className="font-medium text-green-400">Round 1: Preliminary</h3>
                    <p className="text-gray-400 mt-1">
                      A 6-hour online round where participants solve three challenges of varying difficulty. The top 50
                      participants will advance to Round 2.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-green-400">Round 2: Final</h3>
                    <p className="text-gray-400 mt-1">
                      A 24-hour intensive hackathon where finalists build a complete project based on the provided theme
                      and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border-green-500/30 cyber-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Users className="h-5 w-5 text-green-400" />
                <span>Eligibility & Teams</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    Open to all individuals 18 years or older, regardless of experience level.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    Participants must register individually and compete individually in both rounds.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    All submissions must be original work created during the hackathon period.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">
                    Employees of the organizing company and their immediate family members are not eligible to
                    participate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border-green-500/30 cyber-glow">
            <CardHeader>
              <CardTitle className="text-green-400">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-green-900/30">
                  <AccordionTrigger className="text-green-400 hover:text-green-300">
                    Can I use pre-existing code or libraries?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes, you can use open-source libraries and frameworks. However, the core solution and implementation
                    must be original work created during the hackathon. You must properly cite any external resources
                    used.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-green-900/30">
                  <AccordionTrigger className="text-green-400 hover:text-green-300">
                    What happens if I can't complete Round 1?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Participants who cannot complete Round 1 will not be eligible to advance to Round 2. However, you
                    will still receive feedback on your partial submissions and can participate in future hackathons.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-green-900/30">
                  <AccordionTrigger className="text-green-400 hover:text-green-300">
                    How are submissions evaluated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Submissions are evaluated based on functionality, code quality, innovation, user experience, and
                    adherence to requirements. A panel of industry experts will judge the final round submissions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-green-900/30">
                  <AccordionTrigger className="text-green-400 hover:text-green-300">
                    Is there a refund policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Registration fees are non-refundable. However, if you need to withdraw due to exceptional
                    circumstances, please contact our support team at least 7 days before the event.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-green-900/30">
                  <AccordionTrigger className="text-green-400 hover:text-green-300">
                    Will I retain intellectual property rights to my submission?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes, participants retain all intellectual property rights to their submissions. However, by
                    participating, you grant the organizers a non-exclusive license to showcase your project for
                    promotional purposes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-black/80 border-green-500/30 cyber-glow">
            <CardHeader>
              <CardTitle className="text-green-400">Code of Conduct</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300">
                  All participants are expected to adhere to our Code of Conduct, which promotes a respectful,
                  inclusive, and collaborative environment:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Treat all participants with respect and consideration.</li>
                  <li>Communicate openly and thoughtfully with others.</li>
                  <li>Be mindful of your language and actions.</li>
                  <li>Refrain from demeaning, discriminatory, or harassing behavior.</li>
                  <li>Be respectful of the various viewpoints and experiences of others.</li>
                  <li>Give attribution when using others' work.</li>
                  <li>Report any concerns to the organizers immediately.</li>
                </ul>

                <p className="text-amber-400 font-medium">
                  Violation of the Code of Conduct may result in disqualification from the hackathon and future events.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
